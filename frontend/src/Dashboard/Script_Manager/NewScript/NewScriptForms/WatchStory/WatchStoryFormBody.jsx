import React, { useState } from 'react';
import RangeInputNumber from '../../../../components/RangeInputNumber/RangeInputNumber';
import ToggleRangeInput from '../../../../components/RangeInputNumber/ToggleRangeInput';


const WatchStoryFormBody = () => {
    const [videoRange, setVideoRange] = useState({ min: 3, max: 5 });
    const [timeRange, setTimeRange] = useState({ min: 15, max: 20 });

    return (
        <>
            <div className="mb-3">
                {/* Number of videos */}
                <RangeInputNumber
                    label="Number of videos:"
                    minValue={videoRange.min}
                    maxValue={videoRange.max}
                    onMinChange={(value) => setVideoRange((prev) => ({ ...prev, min: value }))}
                    onMaxChange={(value) => setVideoRange((prev) => ({ ...prev, max: value }))}
                    minLimit={1}
                    maxLimit={100}
                    className="mb-4"
                />

                {/* Watching time/video (s) */}
                <RangeInputNumber
                    label="Watching time/video <span class='font-normal'>(s):</span>"
                    minValue={timeRange.min}
                    maxValue={timeRange.max}
                    onMinChange={(value) => setTimeRange((prev) => ({ ...prev, min: value }))}
                    onMaxChange={(value) => setTimeRange((prev) => ({ ...prev, max: value }))}
                    minLimit={1}
                    maxLimit={300}
                    className="mb-4"
                />

                <ToggleRangeInput
                    label="Random Like"
                    subLabel="(video)"
                    minLimit={1}
                    maxLimit={10}
                    defaultMin={1}
                    defaultMax={2}
                    className="mb-4"
                />
                
                <ToggleRangeInput
                    label="Random Like"
                    subLabel="(video)"
                    minLimit={1}
                    maxLimit={10}
                    defaultMin={1}
                    defaultMax={2}
                    className="mb-4"
                />
            </div>
        </>
    );
};

export default WatchStoryFormBody;
