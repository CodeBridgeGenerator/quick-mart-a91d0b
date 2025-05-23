
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),
stockqty: faker.lorem.sentence(1),
categoryId: faker.lorem.sentence(1),
supplierId: faker.lorem.sentence(1),
supermarketId: faker.lorem.sentence(1),
itemId: faker.lorem.sentence(1),
image: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
