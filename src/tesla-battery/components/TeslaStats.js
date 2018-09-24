import React from 'react';

export const TeslaStats = ({models, metrics, speed, temperature, climate, wheels}) => {
    return (
        <div className="tesla-stats">
            <ul>
                {/* This is working well in the first place you won't have to touch it */}
                {models.map(model => {
                    const miles = metrics[model][wheels.value][
                        climate.value ? 'on' : 'off'
                        ].speed[speed.value][temperature.value];
                    return {
                        model,
                        miles,
                    }
                }).map((stat, index) => <li key={index}>
                        {/* the stat.model here under must be lowercased */}
                        <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`} />
                        <p>{stat.miles}
                            <span>MI</span>
                        </p>
                    </li>
                )}
            </ul>
        </div>
)}