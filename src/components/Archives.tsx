import * as React from 'react'

import './Archives.scss'

const Archives: React.StatelessComponent = () => {
  return (
    <div className="archives">
      <div className="archives__header">
        <div className="archives__count">7 archived events</div>
      </div>
      <div className="archives__list">
        <div className="archives__item archives__item--workshops">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Oct</div>
              <div className="archives__item-header-day">19</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">Basic Neural Networks</h1>
              <p className="archives__item-header-description">Shubhang Desai, a member of our team, will be teaching basic usage of Neural Networks with Python. If you’ve never worked with AI or machine learning before, or want a refresher, this workshop is for you!</p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Slides</h3>
            <ol>
              <li><a href="/12-19-17/slides.pdf">Basic Neural Networks — Workshop #1</a></li>
            </ol>
            <h3>GitHub Repo</h3>
            <ol>
              <li><a href="https://github.com/stanfordaigroup/basic-nn-workshop">stanfordaigroup/basic-nn-workshop</a></li>
            </ol>
            <h3>Emails</h3>
            <ol>
              <li><a href="/12-19-17/email-1.html">SAIG — First Workshop This Thursday! (10/19 @ 7PM)</a></li>
            </ol>
            <hr/>
            <p><strong>NOTE</strong>: Apologies to those interested, but the audio of this event was corrupted. We will be hosting more beginner-friendly events in the future, so don't fret!</p>
          </div>
        </div>
        <div className="archives__item archives__item--social">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Oct</div>
              <div className="archives__item-header-day">12</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">First Meeting</h1>
              <p className="archives__item-header-description">Our first meeting as a public student organization. Started with introductions of the team and org, and ended with a viewing of the <em>Twilight Zone</em>.</p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Slides</h3>
            <ol>
              <li><a href="/12-10-17/student-ai-group-intro.pdf">Student AI Group — Intro</a></li>
            </ol>
            <h3>Emails</h3>
            <ol>
              <li><a href="/12-10-17/email-1.html">SAIG — First Meeting Tomorrow @ 7pm</a></li>
              <li><a href="/12-10-17/email-2.html">[ACTION REQUIRED] Follow-Up After Our First Meeting</a></li>
              <li><a href="/12-10-17/email-3.html">SAIG — Internship Applications Open!</a></li>
            </ol>
            <h3>Attachments</h3>
            <ol>
              <li><a href="/12-10-17/flyer-1.pdf">Ad Flyer 1</a></li>
              <li><a href="/12-10-17/flyer-2.pdf">Ad Flyer 2</a></li>
              <li><a href="/12-10-17/flyer-3.pdf">Ad Flyer 3</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;