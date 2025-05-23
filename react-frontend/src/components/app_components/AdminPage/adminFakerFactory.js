
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
adminId: faker.lorem.sentence(1),
supermarketId: faker.lorem.sentence(1),
phone: faker.lorem.sentence(1),
loginId: faker.lorem.sentence(1),
adminRole: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
