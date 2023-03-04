# Component Driven Application Boilerplate

## Instalace

Zkopírujte `.env.dist` do `.env` a případně dle potřeby upravte.

spusťte:

```shell script
make init
```

## Práce s projektem

Projekt spustíte

```shell script
./bin/start
```

a zastavíte

```shell script
./bin/stop
```

## Strapi CMS

### Admin account

- first name: Ondrej
- last name: Elias
- email: ```ondrej.elias@mediafactory.cz```
- password: ```Admin123```

## Issues

- Strapi nepodporuje pnpm (indirect dependencies), proto je nutné použít npm nebo yarn. Založen issue: <https://github.com/strapi/strapi/issues/15992>. Je možné že bude vyřešeno v 4.7.2, možné řešení v commitu <https://github.com/strapi/strapi/commit/930a3afec70a44f64672a730be0b61a9c905468d>. Prozatím odděleno od statních workspaces a používá yarn classic.
