
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
addressId: faker.lorem.sentence(1),
street: faker.lorem.sentence(1),
city: faker.lorem.sentence(1),
state: faker.lorem.sentence(1),
postalCode: faker.lorem.sentence(1),
country: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
