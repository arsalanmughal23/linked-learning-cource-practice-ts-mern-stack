import { Timestamp } from 'mongodb';
import { connectClient, stopClient } from '../server/db';

async function main() {
  const client = await connectClient();

  await client.collection('contest').deleteMany();

  const resp = await client.collection('contest').insertMany([
    {
      id: 1,
      categoryName: 'Business/Company',
      contestName: 'Cognitive Building Bricks',
      names: [
        {
          id: 1,
          name: 'Mind Assembly',
          timestamp: new Date(),
        },
        {
          id: 2,
          name: 'Brain Scaffold',
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 1,
      categoryName: 'Magazine/Newsletter',
      contestName: 'Educating people about sustainable food production',
      names: [],
    },
  ]);

  console.log('Inserted Contests: ', resp.insertedCount);
  stopClient();
}

main();
