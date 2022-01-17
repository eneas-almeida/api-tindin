#!/bin/bash

mongo -- "$MONGODB_DB_NAME" <<EOF
    var database = '$MONGODB_DB_NAME';
    var user = '$MONGODB_USER';
    var password = '$MONGODB_PASSWORD';

    db.getSiblingDB(database);

    db.createUser({user: user, pwd: password, roles: [{ role: 'readWrite', db: database }]});
EOF
