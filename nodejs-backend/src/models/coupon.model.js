
    module.exports = function (app) {
        const modelName = 'coupon';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            couponId: { type:  String , required: true },
title: { type:  String , required: true },
detail: { type:  String , required: true },
itemId: { type:  String , required: true },
code: { type:  String , required: true },
startDate: { type: Date, required: false },
endDate: { type:  String , required: true },
quantity: { type: Number, required: false, max: 10000000 },
discount: { type: Number, required: false, max: 10000000, default: 0.5 },
status: { type:  String , required: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };