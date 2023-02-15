import express from 'express';

import auth from './auth.api';
import parlament from './parlament.api';
import committee from './committee.api';
import faction from './faction.api';
import unit from './unit.api';
import citizen from './citizen.reception.api';
import text2 from './standing.committee.api';
import acceptability from './acceptability.api';
import secondacceptability from './second.acceptability.api';
import timestamp from './timestamp.api';
import superAdmin from './super.admin.api';

const app = express();

// API
app.use('/auth', auth);
// app.use('/users', users);
app.use('/parlament', parlament);
app.use('/committee', committee);
app.use('/faction', faction);
app.use('/units', unit);
app.use('/citizen', citizen);
app.use('/meets', text2);
app.use('/acceptability', acceptability);
app.use('/secondacceptability', secondacceptability);
app.use('/timestamp', timestamp);
app.use('/superAdmin', superAdmin);

export default app;
