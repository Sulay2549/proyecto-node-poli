// servidor.js
// Servicio REST para registrar clientes (SOA - Arquitectura REST)

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Endpoint principal: POST /api/v1/clientes
app.post('/api/v1/clientes', (req, res) => {
  const { nombre, email, telefono } = req.body;

  // Validar datos básicos
  if (!nombre || !email || !telefono) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
  }

  // Simular registro en base de datos
  const nuevoCliente = {
    id: Date.now(),
    nombre,
    email,
    telefono,
  };

  console.log('Cliente registrado:', nuevoCliente);

  return res.status(201).json({
    mensaje: 'Cliente registrado exitosamente.',
    cliente: nuevoCliente,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});
