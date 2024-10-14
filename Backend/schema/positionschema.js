const {schema} =require("mongoose")

const positionschema=new schema({
    product: String,
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss: Boolean,
})

module.exports(positionschema);