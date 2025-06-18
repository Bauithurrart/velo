import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "./db.js";
const app = express();

app.use(express.json());

const router = express.Router();
const JWT_SECRET = "clave_super_secreta"; // Cambiala o ponela en .env

router.post("/Registro", async (req, res) => {
  const { usuario, contraseña, newsletter } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const [existeEnUsuarios] = await db.query(
      "SELECT * FROM usuarios WHERE Nombre_usuario = ? OR Email = ?",
      [usuario, usuario]
    );
    if (existeEnUsuarios.length > 0) {
      return res.status(409).json({ error: "Usuario o email ya registrado" });
    }

    const [existePendiente] = await db.query(
      "SELECT * FROM registro_pendiente WHERE Nombre_usuario = ?",
      [usuario]
    );
    if (existePendiente.length > 0) {
      return res.status(409).json({ error: "Ya existe un registro pendiente para este usuario" });
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const codigoVerif = Math.floor(100000 + Math.random() * 900000).toString();

    await db.query(
      `INSERT INTO registro_pendiente
      (Nombre_usuario, Contraseña, Newsletter, Codigo_verif)
      VALUES (?, ?, ?, ?)`,
      [usuario, hashedPassword, newsletter ? 1 : 0, codigoVerif]
    );

    console.log(`Código de confirmación para ${usuario}: ${codigoVerif}`);

    res.json({
      mensaje: "Te enviamos un código por email. Confirmalo para completar el registro.",
    });
  } catch (error) {
    console.error("Error en Registro:", error);
    res.status(500).json({ error: "Error al registrar" });
  }
});

router.post("/Login", async (req, res) => {
  const { usuario, contraseña } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE Nombre_usuario = ? OR Email = ?",
      [usuario, usuario]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Usuario o contraseña inválidos" });
    }

    const user = rows[0];

    if (!user.contraseña) {
      return res.status(401).json({ error: "Usuario o contraseña inválidos" });
    }

    const match = await bcrypt.compare(contraseña, user.contraseña);

    if (!match) {
      return res.status(401).json({ error: "Usuario o contraseña inválidos" });
    }

    if (user.Confirmado === 0) {
      return res.status(403).json({ error: "Debe confirmar su email para iniciar sesión" });
    }

    // Generar token JWT
    const token = jwt.sign(
      {
        id: user.id,
        Nombre_usuario: user.Nombre_usuario,
        Rol: user.Rol,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: user.id,
        Nombre_usuario: user.Nombre_usuario,
        Rol: user.Rol,
        Newsletter: user.Newsletter,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el login" });
  }
});

router.post("/Confirmar", async (req, res) => {
  const { usuario, codigo } = req.body;

  if (!usuario || !codigo) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM registro_pendiente WHERE Nombre_usuario = ? AND Codigo_verif = ?",
      [usuario, codigo]
    );

    if (rows.length === 0) {
      return res.status(400).json({ error: "Código o usuario incorrecto" });
    }

    const user = rows[0];

    await db.query(
      `INSERT INTO usuarios
      (Nombre_usuario, Contraseña, Newsletter, Rol, Confirmado)
      VALUES (?, ?, ?, ?, ?)`,
      [user.Nombre_usuario, user.Contraseña, user.Newsletter, "usuario", 1]
    );

    await db.query("DELETE FROM registro_pendiente WHERE id = ?", [user.id]);

    res.json({ mensaje: "Correo confirmado y usuario registrado correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al confirmar correo." });
  }
});

router.post("/ReenviarCodigo", async (req, res) => {
  const { usuario } = req.body;

  if (!usuario) {
    return res.status(400).json({ error: "Falta el usuario" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM registro_pendiente WHERE Nombre_usuario = ?",
      [usuario]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "No hay registro pendiente para este usuario" });
    }

    const nuevoCodigo = Math.floor(100000 + Math.random() * 900000).toString();

    await db.query(
      "UPDATE registro_pendiente SET Codigo_verif = ? WHERE id = ?",
      [nuevoCodigo, rows[0].id]
    );

    console.log(`Nuevo código de confirmación para ${usuario}: ${nuevoCodigo}`);

    res.json({ mensaje: "Código reenviado correctamente. Revisa tu mail." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al reenviar código." });
  }
});router.put("/ActualizarDatos", async (req, res) => {
  try {
    const { usuario, correo, contraseña, nombreCompleto, dni } = req.body;

    // Validación básica
    if (!usuario || !correo || !contraseña || !nombreCompleto || !dni) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Hashear la contraseña antes de actualizar
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    console.log("Datos recibidos para actualizar:", {
      usuario,
      correo,
      hashedPassword,
      nombreCompleto,
      dni,
    });

    const [result] = await db.query(
      `UPDATE usuarios SET 
        Email = ?, 
        Contraseña = ?, 
        Nombre_completo = ?, 
        DNI = ?
       WHERE Nombre_usuario = ?`,
      [correo, hashedPassword, nombreCompleto, dni, usuario]
    );

    // result.affectedRows indica cuántas filas se modificaron
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: "Datos actualizados correctamente" });
  } catch (error) {
    console.error("Error en /ActualizarDatos:", error);
    res.status(500).json({ error: "Error interno al actualizar datos" });
  }
});


export default router;





