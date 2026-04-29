import React from 'react';

const LearningTips = () => {
    return (
        <div className='bg-base-200 p-10 rounded-xl md:w-4/5 md:mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-10'>Learning Tips</h2>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='bg-white p-4 shadow-md space-y-5 border border-base-300 rounded-xl'>
                    <h3 className='text-xl font-bold'>Study Techniques for Mastery</h3>
                    <p className='font-medium'>1. Active Recall: Instead of re-reading notes or re-watching a video, users should test themselves.</p>
                    <p className='font-medium'>2. The Feynman Technique: If you can&apos;t explain it simply, you don&apos;t understand it well enough.</p>
                    <p className='font-medium'>3. Spaced Repetition: Our brains forget information over time. Reviewing material at increasing intervals (1 day, 3 days, 1 week, 1 month) cements it into long-term memory.</p>
                    <p className='font-medium'>4. Interleaving: Instead of focusing on one topic for five hours (blocked practice), mix related topics together.</p>
                </div>
                <div className='bg-white p-4 shadow-md space-y-5 border border-base-300 rounded-xl'>
                    <h3 className='text-xl font-bold'>Time Management Tips</h3>
                    <p className='font-medium'>1. The Pomodoro Technique: Break work into intense, focused intervals.</p>
                    <p className='font-medium'>2. Time Blocking: Treat your learning like a fixed appointment.</p>
                    <p className='font-medium'>3. Prioritization: Focus on the most important and urgent tasks first.</p>
                    <p className='font-medium'>4. Eat the Frog: Tackle the most difficult or confusing module first thing in the session when your mental energy is highest.</p>
                </div>
               
            </div>
            
        </div>
    );
};

export default LearningTips;