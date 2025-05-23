
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
orderItemId: faker.lorem.sentence(1),
orderId: faker.lorem.sentence(1),
itemId: faker.lorem.sentence(1),
quantity: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
