exports.logRequestPaths = (req,res,next) => {
    console.log(`request made to: ${req.url}`);
    next();
};

exports.index = (req,res) => {
    res.render("index");
};
exports.showFilms = (req,res) => {
    res.render("films");
};
exports.showItwork =(req,res)=>{
    res.render("itwork");
};
exports.showReels =(req,res)=>{
    res.render("reels");
};

