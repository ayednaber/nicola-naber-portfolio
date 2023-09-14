import React from 'react';

import './Measurements.css';

interface ModelMeasurementsProps {
    height: number;
    chest: number;
    abdomen: number;
    hip: number;
}

const ModelMeasurements: React.FC<ModelMeasurementsProps> = ({
    height,
    chest,
    abdomen,
    hip,
}) => {
    return (
        <div className="measurements-container">
            <h3>Measurements</h3>
            <ul className="measurements">
                <li><strong>Height:</strong> {height} cm</li>
                <li><strong>Chest:</strong> {chest} cm</li>
                <li><strong>Abdomen:</strong> {abdomen} cm</li>
                <li><strong>Hip:</strong> {hip} cm</li>
            </ul>
        </div>
    );
}

export default ModelMeasurements;