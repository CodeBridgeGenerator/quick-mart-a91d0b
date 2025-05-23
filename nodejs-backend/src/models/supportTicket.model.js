
    module.exports = function (app) {
        const modelName = 'support_ticket';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ticketId: { type:  String , required: true },
orderId: { type:  String , required: true },
date: { type: Date, required: false },
subject: { type:  String , required: true },
status: { type:  String , required: true },
message: { type:  String , required: true },

            
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