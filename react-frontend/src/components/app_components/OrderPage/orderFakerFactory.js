
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerId: faker.lorem.sentence(1),
supermarketId: faker.lorem.sentence(1),
totalPrice: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
paymentMethod: faker.lorem.sentence(1),
deliveryMethod: faker.lorem.sentence(1),
orderId: faker.lorem.sentence(1),
subTotal: faker.lorem.sentence(1),
taxId: faker.lorem.sentence(1),
couponId: faker.lorem.sentence(1),
shippingTotal: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
