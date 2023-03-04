export default ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'https://cms.mfproject.localhost',
    proxy: true,
    app: {
        keys: env.array('APP_KEYS'),
    },
    // webhooks: {
    //     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    //},
    // proxy: {
    //     enabled: true,
    //     // The following IP is for Traefik's Docker network gateway
    //     // Replace it with your own gateway IP if different
    //     //host: '172.18.0.1',
    //     host: env('DOCKER_HOST_MACHINE_IP'),
    //     port: 80,
    //     ssl: true,
    //     // The following line is required for secure cookies to work with Traefik
    //     secure: true,
    //     // The following line is required to set the X-Forwarded-* headers correctly
    //     // Replace it with your own network settings if different
    //     headers: { 'x-forwarded-proto': 'https' },
    // },
});
