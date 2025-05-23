
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
supermarketId: faker.lorem.sentence(1),
addressId: faker.lorem.sentence(1),
phone: faker.lorem.sentence(1),
email: faker.internet.email(),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
