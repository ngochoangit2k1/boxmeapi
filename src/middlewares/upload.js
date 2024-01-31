// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/');
//   },
//   filename: function (req, file, cb) {
//     const originalname = file.originalname;
//     const uniqueSuffix = Date.now();
//     const newFilename = originalname.split('.').slice(0, -1).join('.') + '-' + uniqueSuffix + '.' + originalname.split('.').pop();

//     cb(null, newFilename);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFormats = ['png', 'jpeg', 'jpg', 'gif'];
//   const fileExt = file.originalname.split('.').pop().toLowerCase();

//   if (allowedFormats.includes(fileExt) && file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
// });

// exports.Avatar = function () {
//   return upload.array('avatar', 12);
// };
// exports.frontImage = function () {
//   return upload.array('frontImage', 12);
// };
// exports.backImage = function () {
//   return upload.array('backImage', 12);
// };
// exports.portrait = function () {
//   return upload.array('portrait', 12);
// };
// exports.Image = function () {
//   return upload.array('image', 12);
// };
const multer = require('multer');
const cloudiness = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudiness.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudiness,
  params: {
    folder: 'api-vay',
    allowed_formats: ['png', 'jpeg', 'jpg', 'gif', 'jpeg'],
  },
});

exports.frontImage = function () {
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.array('frontImage', 12);
};

exports.backImage = function () {
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.array('backImage', 12);
};

exports.portrait = function () {
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.array('portrait', 12);
};

exports.Avatar = function () {
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.array('avatar', 12);
};

exports.Image = function () {
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.array('image', 12);
};