// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function down(pg) {
  return pg.schema
    .dropTableIfExists('mps')
    .dropTableIfExists('committee')
    .dropTableIfExists('faction')
    .dropTableIfExists('units')
    .dropTableIfExists('acceptability')
    .dropTableIfExists('second-acceptability')
    .dropTableIfExists('text1')
    .dropTableIfExists('text2')
    .dropTableIfExists('users')
    .dropTableIfExists('time_table');
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await down(pg);
    console.log('Successfully dropped all tables ... ');
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
