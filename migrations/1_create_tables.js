// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
    .createTable('mps', (table) => {
      table.increments('id').primary();
      table.string('firstname');
      table.string('lastname');
      table.string('surname');
      table.string('phonenumber');
      table.boolean('key').defaultTo(false);
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('committee', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('member1').notNullable();
      table.string('member2');
      table.string('cityphone');
      table.string('internalphone');
      table.string('internalphone2');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('faction', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('member1');
      table.string('member2');
      table.string('cityphone');
      table.string('internalphone');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('units', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('internalphone');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('acceptability', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('name').notNullable();
      table.string('day').notNullable();
      table.string('time');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('second-acceptability', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('day').notNullable();
      table.string('time');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('text1', (table) => {
      table.increments('id').primary();
      table.text('title').notNullable();
      table.text('text').notNullable();
      table.text('subtitle1');
      table.text('subtitle2');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('text2', (table) => {
      table.increments('id').primary();
      table.text('title').notNullable();
      table.text('text').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('user').notNullable().unique();
      table.string('pwd').notNullable();
      table.string('role').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('time_table', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.dateTime('created_at');
    });
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables ... ');
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
