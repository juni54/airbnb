
import Home from "../models/user.js";


export const homePage = async (req, res) => {
  const rhomes = await Home.find(); // ✅ Mongoose se data read
  
 res.render("user", { rhomes });
};

export const hostPage = (req, res) => {
  res.render("host");
};

export const addHome = async (req, res) => {
  try {
    const newHome = new Home({
      houseName: req.body.houseName,
    });
      
    await newHome.save();
   
    res.render("hostpost");
  } catch (err) {
    res.status(500).send("❌ Error saving home: " + err.message);
  }
};



export const deleteHome = async (req, res) => {
  try {
    await Home.findByIdAndDelete(req.params.id);
     res.status(200).json({ message: 'Deleted successfully' });
   
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Show edit form with current data
export const getUpdateForm = async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    res.render('edit', { home }); // edit.ejs ko data bhejna
  } catch (err) {
    res.status(500).send("Error loading form");
  }
};

// Handle update POST
export const updateHome = async (req, res) => {
  try {
    await Home.findByIdAndUpdate(req.params.id, {
      houseName: req.body.houseName,
    });
    res.redirect('/'); // ya jahan list show hoti ho
  } catch (err) {
    res.status(500).send("Update failed");
  }
};


