const { movieService } = require("../services");

const getmovie = async (req, res) => {
  const movie = await movieService.getmovie();

  console.log(movie,"get");

  res.status(200).json({
    message: "movie get success",
    data: movie,
  });
};

//post method

const addmovie = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    // const movieExist = await movieService.getmovieByFirstName(body.firstName);

    const movie = await movieService.addmovie(body);

    res.status(201).json({
      message: "movie Created success",
      data: movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// delete method

const deletemovie = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const movie = await movieService.deletemovie(id);
    if (!movie) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "movie delete success",
      data: movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updatemovie = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    // const movieExist = await movieService.getmovieByFirstName(body.firstName);

    // if (movieExist) {
    //   throw new Error("movie already existed");
    // }

    const movie = await movieService.updatemovie(id, body);

    res.status(200).json({
      message: "movie updated success",
      data: movie,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { getmovie, addmovie, deletemovie, updatemovie };
