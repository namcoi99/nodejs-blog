module.exports = {
    // Chuyển dữ liệu từ dạng Collection của mongodb sang Object
    multipleMongooseToObject: (mongooses) => mongooses.map(mongoose => mongoose.toObject()),
    mongooseToObject: (mongoose) => mongoose ? mongoose.toObject() : mongoose,
}