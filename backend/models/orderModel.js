import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type:String, required:true},
    items: {type:Array, required:true},
    amount: {type:Number, required:true},
    address: {
        firstName: {type:String, required:true},
        lastName: {type:String, required:true},
        email: {type:String, required:true},
        street: {type:String, required:true},
        city: {type:String, required:true},
        state: {type:String, required:true},
        zipcode: {type:String, required:true},
        country: {type:String, required:true},
        phone: {type:String, required:true}
    },
    status: {type:String, required:true, default: 'Order Placed'},
    paymentMethod: {type:String, required:true},
    payment: {type:Boolean, required:true, default: false},
    date: {type:String, required:true}

})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;