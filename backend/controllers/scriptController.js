// backend/controllers/scriptController.js
const Script = require('../models/Script');

exports.createScript = async (req, res) => {
  try {
    const { name, note, nodes, edges } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Script name is required.' });
    }

    // Ensure nodes and edges are being saved
    const script = new Script({ name, note, nodes, edges });
    await script.save();
    res.status(201).json(script);
  } catch (error) {
    console.error('Error creating script:', error);
    res.status(500).json({ message: 'Server error. Unable to create script.' });
  }
};

// Get all scripts
exports.getAllScripts = async (req, res) => {
  try {
    const scripts = await Script.find();
    res.status(200).json(scripts);
  } catch (error) {
    console.error('Error fetching scripts:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch scripts.' });
  }
};

// Get a specific script by ID
exports.getScriptById = async (req, res) => {
  try {
    const script = await Script.findById(req.params.id);
    if (!script) {
      return res.status(404).json({ message: 'Script not found' });
    }
    res.status(200).json(script);
  } catch (error) {
    console.error('Error fetching script:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch script.' });
  }
};

// Update a script
exports.updateScript = async (req, res) => {
  try {
    const { name, note, nodes, edges } = req.body;
    const updatedData = { name, note, nodes, edges, updatedAt: new Date() };

    const updatedScript = await Script.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true } // Ensure validators run and return updated document
    );

    if (!updatedScript) {
      return res.status(404).json({ message: 'Script not found' });
    }

    res.status(200).json(updatedScript);
  } catch (error) {
    console.error('Error updating script:', error);
    res.status(500).json({ message: 'Server error. Unable to update script.' });
  }
};

// Delete a script
exports.deleteScript = async (req, res) => {
  try {
    const deletedScript = await Script.findByIdAndDelete(req.params.id);
    if (!deletedScript) {
      return res.status(404).json({ message: 'Script not found' });
    }
    res.status(200).json({ message: 'Script deleted successfully' });
  } catch (error) {
    console.error('Error deleting script:', error);
    res.status(500).json({ message: 'Server error. Unable to delete script.' });
  }
};
