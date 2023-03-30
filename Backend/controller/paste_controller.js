const PasteModel = require("../model/paste_model");

const pasteCreate = async (req, res) => {
  //getting the text from user
  const { text } = req.body;

  //validating the text data
  if (!text) {
    return res.status(401).json({
      message: "please fill the required field",
    });
  }
  try {
    //creating and saving the new paste in the db.
    const paste = await PasteModel.create({
      username: req.user.username,
      text,
    });

    return res.status(201).json({
      message: "Paste saved successfully in database!",
      paste,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const pasteDelete = async (req, res) => {
  //get the id from request params
  const id = req.params._id.toString();

  try {
    //if it's a valid ObjectId, proceed with `findByIdAndDelete` call.
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      //check whether the id is exist or not
      const Idexist = await PasteModel.findById(id);
      if (!Idexist) {
        return res.status(404).json({
          error: "Id doesn't exist",
        });
      }

      //find and delete the document according to the id
      const deletedDoc = await PasteModel.findByIdAndDelete(id);

      return res.status(204).json({
        message: "Document Deleted Successfully.",
        deletedDoc,
      });
    } else {
      return res.status(404).json({
        message: "invalid id ,please enter correct id!!",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

module.exports = { pasteCreate, pasteDelete };
