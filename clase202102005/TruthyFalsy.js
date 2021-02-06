// Estos arrojan false
Boolean();
Boolean(0);
Boolean(undefined);
Boolean(null);
Boolean(NaN);
Boolean(false);
Boolean("");

// Estos arrojan true
Boolean(" ");
Boolean("a");
Boolean(1);
Boolean([]);
Boolean({});
Boolean(function(){});
Boolean(true);
