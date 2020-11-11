const mongoose = require("mongoose");
const { Schema } = mongoose;

const templateSchema = new Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    description: {
        type: String,
        required: false
    },
    theme: {
        bgColor: String,
        textColor: String,
        bannerImage: String
    },
    attributes: [{
        type: {type: String},
        icon: String,
        required: Boolean,
        label: String,
        description: String,
        inLine: Boolean,
        placeholder: String,
        className: String,
        subtype: String,
        regex: String,
        errorText: String,
        handle: Boolean,
        name: String,
        values: [{
            label: String,
            value: String
        }],
    }],
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    availableFor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
  },
  {timestamps: true}
);

module.exports = mongoose.model("Templates", templateSchema);