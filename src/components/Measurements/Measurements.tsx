import React from 'react';
import image1 from "../../assets/images/DSC3622.jpg";
import image2 from "../../assets/images/DSC3623.jpg";

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
        <div className='measurement-parent-container'>
            <div className="two-pics">
                <img src={image1} alt="model" className="measurement-image" />
                <img src={image2} alt="model" className="measurement-image" />
            </div>
            <div className="measurements-container">
                <h3>Measurements</h3>
                <ul className="measurements">
                    <li className="measurement"><strong>Height:</strong> {height} cm</li>
                    <li className="measurement"><strong>Chest:</strong> {chest} cm</li>
                    <li className="measurement"><strong>Abdomen:</strong> {abdomen} cm</li>
                    <li className="measurement"><strong>Hip:</strong> {hip} cm</li>
                </ul>
            </div>
        </div>
    );
}

export default ModelMeasurements;