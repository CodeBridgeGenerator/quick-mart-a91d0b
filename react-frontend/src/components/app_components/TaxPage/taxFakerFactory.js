
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
taxId: faker.lorem.sentence(1),
detail: faker.lorem.sentence(1),
taxRate: faker.lorem.sentence(1),
taxAmount: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
