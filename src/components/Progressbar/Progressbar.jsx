import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const Progressbar = () => {
    const myRef = document.querySelector('.scrollable-div')
    const score = 90;
    const html = 99;
    const css = 96;
    const bootstrap = 95;
    const tailwind = 90;
    const javaScript = 97;
    const ReactJs = 90;
    const Firebase = 88;
    const Mongodb = 80;
    const MySql = 75;
    const C = 87;
    const Node = 77;
    const CPlus = 60;
    const Java = 30;
    const Python = 40;
    const MSWORD = 89;
    const MSEXCEL = 85;
    const MSPOWERPOINT = 92;
    const MachineLearning = 66;
    const ArtificialIntelligence = 60;
    const Assemblylanguage = 55;
    return (
        <div className='bg-dark p-4 text-white rounded-3 w-100 mx-auto shadow-lg mt-3'>
            <h1 className='text-center fw-bold '>SOFT SKILL</h1>

            <div className=' d-flex w-75 mx-auto'>

                <div className='w-50'>
                    <p>HTML<ProgressBar animated variant="warning" now={html} label={`${html} %`} /></p>
                    <p>CSS<ProgressBar animated variant="success" now={css} label={`${css} %`} /></p>
                    <p>BOOTSTRAP<ProgressBar animated variant="danger" now={bootstrap} label={`${bootstrap} %`} /></p>
                    <p>TAILWIND<ProgressBar animated variant="primary" now={tailwind} label={`${tailwind} %`} /></p>
                    <p>JavaScript<ProgressBar animated variant="info" now={javaScript} label={`${javaScript} %`} /></p>
                    <p>ReactJs<ProgressBar animated variant="warning" now={ReactJs} label={`${ReactJs} %`} /></p>
                    <p>Firebase<ProgressBar animated variant="success" now={Firebase} label={`${Firebase} %`} /></p>
                    <p>Mongodb<ProgressBar animated variant="danger" now={Mongodb} label={`${Mongodb} %`} /></p>
                    <p>MySql<ProgressBar animated variant="primary" now={MySql} label={`${MySql} %`} /></p>
                    <p>C<ProgressBar animated variant="info" now={C} label={`${C} %`} /></p>

                </div>
                <div className='w-50 ms-3'>
                    <p>Node.js<ProgressBar animated variant="warning" now={Node} label={`${Node} %`} /></p>
                    <p>C ++<ProgressBar animated variant="warning" now={CPlus} label={`${CPlus} %`} /></p>
                    <p>Java<ProgressBar animated variant="danger" now={Java} label={`${Java} %`} /></p>
                    <p>Python<ProgressBar animated variant="success" now={Python} label={`${Python} %`} /></p>
                    <p>MS WORD<ProgressBar animated variant="primary" now={MSWORD} label={`${MSWORD} %`} /></p>
                    <p>MS EXCEL<ProgressBar animated variant="info" now={MSEXCEL} label={`${MSEXCEL} %`} /></p>
                    <p>MS POWERPOINT<ProgressBar animated variant="warning" now={MSPOWERPOINT} label={`${MSPOWERPOINT} %`} /></p>
                    <p>Machine Learning<ProgressBar animated variant="danger" now={MachineLearning} label={`${MachineLearning} %`} /></p>
                    <p>Artificial Intelligence<ProgressBar animated variant="success" now={ArtificialIntelligence} label={`${ArtificialIntelligence} %`} /></p>
                    <p>Assembly Language<ProgressBar animated variant="primary" now={Assemblylanguage} label={`${Assemblylanguage} %`} /></p>
                </div>
            </div>

        </div>
    );
};

export default Progressbar;