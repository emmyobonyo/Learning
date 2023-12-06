const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

const PORT = 3000;

// AUthentication Routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
