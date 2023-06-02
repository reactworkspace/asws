const Dashboard = () => {
  return (
    <>
      <section className="section">
        <div className="heading">
          <span>dashbaord</span>
          <button className="button">
            <span>logo</span>
            <span>Create</span>
          </button>
        </div>
        <div className="cards">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="card">
          <div className="heading">
            <div></div>
            <div>
              <div>
                <span>Logo</span>
                <span>present</span>
              </div>
              <div>
                <span>Logo</span>
                <span>absent</span>
              </div>
              <div>
                <span>Logo</span>
                <span>leave</span>
              </div>
            </div>

            <div>
              <button>
                <span>logo</span>
                <span>Filters</span>
              </button>
            </div>
          </div>
          <div className="graph"></div>
        </div>
        <div className="card">
          <div>
            <span>recently joinned student</span>
          </div>
          <div>table</div>
          <div>
            <div>
              <span>showing 1-5 100 data</span>
            </div>
            <div>paging</div>
          </div>
        </div>
      </section>
      <aside>
        <div className="user-profile">
          <div>
            <span>notificion</span>
          </div>
          <div>
            <span>username</span>
            <span>role</span>
          </div>
          <div>
            <span>profile</span>
          </div>
        </div>
        {/* section 2 for students / volunteers */}
        <div>
          <div>
            <span>recently joined teachers</span>
          </div>
          <div>
            <div className="card">
              <div>profile image</div>
              <div>
                <span>shaik ahmed</span>
                <span>jamia masjid centre</span>
              </div>
              <div>unknow time</div>
            </div>
          </div>
        </div>

        {/* section 2 for students / volunteers */}
        <div>
          <div>
            <span>recently joined teachers</span>
          </div>
          <div>
            <div className="card">
              <div>profile image</div>
              <div>
                <span>shaik ahmed</span>
                <span>jamia masjid centre</span>
              </div>
              <div>unknow time</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
