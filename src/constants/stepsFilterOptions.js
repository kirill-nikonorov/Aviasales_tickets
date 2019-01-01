export const OPTIONS_WITH_VALUES = {
    'Без пересадок': 0,
    '1 пересадка': 1,
    '2 пересадки': 2,
    '3 пересадки': 3
};

const VALUES_WITH_OPTIONS = Object.entries(OPTIONS_WITH_VALUES).reduce((obj, [key, value]) => {
    obj[value] = key;
    return obj;
}, {});

export const OPTIONS = Object.keys(OPTIONS_WITH_VALUES);
export const VALUES = Object.values(OPTIONS_WITH_VALUES);

export const convertOptionsToValues = options => options.map(option => OPTIONS_WITH_VALUES[option]);

export const convertValuesToOptions = values => values.map(value => VALUES_WITH_OPTIONS[value]);
