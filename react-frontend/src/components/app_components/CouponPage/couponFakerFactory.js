
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
couponId: faker.lorem.sentence(1),
title: faker.lorem.sentence(1),
detail: faker.lorem.sentence(1),
itemId: faker.lorem.sentence(1),
code: faker.lorem.sentence(1),
startDate: faker.lorem.sentence(1),
endDate: faker.lorem.sentence(1),
quantity: faker.lorem.sentence(1),
discount: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
