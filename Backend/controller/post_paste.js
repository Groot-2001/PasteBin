const create_post = (req, res, next) => {
  try {
    //* This function is suppose to create a post


  } catch (err) {
    console.warn(err.message);
    res.status(500).json({message : "Internal Server Error"});
  }
}

module.exports = create_post;