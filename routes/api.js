module.exports = (router) => {
    router.get('/arrivals', (req, res) => {
        res.json({
            success: true,
            arrivals: [
                {
                    status: '',
                    flight: 'KL1148',
                    from: 'Rotterdam',
                    scheduled: '11:45',
                    remark: 'Landed 11:41',
                },
                {
                    status: '',
                    flight: 'LH1481',
                    from: 'Köln',
                    scheduled: '11:50',
                    remark: 'Landed 11:49',
                },
                {
                    status: '',
                    flight: 'AFH1481',
                    from: 'Paris CDG',
                    scheduled: '11:50',
                    remark: 'Expected 12:15',
                },
                {
                    status: '',
                    flight: 'BA5148',
                    from: 'London Luton',
                    scheduled: '12:50',
                    remark: 'Expected 15:00',
                },
                {
                    status: '',
                    flight: 'MA602',
                    from: 'Amsterdam',
                    scheduled: '12:50',
                    remark: 'Cancelled',
                },
            ],
        });
    });

    router.get('/departures', (req, res)=> {
        res.json({
            success: true,
            departures: [
                {
                    status: '',
                    flight: 'KL1148',
                    destination: 'Amsterdam',
                    departure: '11:45',
                    remark: 'Gate closed',
                },
                {
                    status: '',
                    flight: 'LH148',
                    destination: 'Frankfurt',
                    departure: '11:50',
                    remark: 'Boarding',
                },
                {
                    status: '',
                    flight: 'AFH148',
                    destination: 'Paris CDG',
                    departure: '11:50',
                    remark: 'Boarding',
                },
                {
                    status: '',
                    flight: 'BA5148',
                    destination: 'London Heathrow',
                    departure: '12:50',
                    remark: '',
                },
                {
                    status: '',
                    flight: 'MA601',
                    destination: 'Amsterdam',
                    departure: '12:50',
                    remark: 'Cancelled',
                },
            ],
        });
    });
    return router;
}