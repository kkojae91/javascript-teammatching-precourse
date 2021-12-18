export const DOM = {
  $APP: '#app',
  $CREW_TAP: '#crew-tab',
  $MAIN: 'main',
  $SECTION: 'section',
  $$RADIO_INPUTS: 'input[name="course"]',
};

export const LENGTH_CHECK = {
  ONE: 1,
};

export const EVENT = {
  CLICK: 'click',
};

export const RADIO_SELECT = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};

export const TEMPLATE = {
  MAIN: `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id="crew-tab">크루 관리</button>
        </li>
        <li>
          <button id="team-tab">팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main></main>
  `,
  CREW_MANAGE: `
  <section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id="frontend-course" />
      <label for="frontend-course">프론트엔드</label>
      <input type="radio" name="course" value="backend" id="backend-course" />
      <label for="backend-course">백엔드</label>
    </div>
  </section>
  `,
  CREW_FRONTEND: `
  <section>
    <h3>프론트엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-button">확인</button>
    </form>
  </section>
  <section>
    <h3>프론트엔드 크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button class="delete-crew-button">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
  CREW_BACKEND: `
  <section>
    <h3>백엔드 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-button">확인</button>
    </form>
  </section>
  <section>
    <h3>백엔드 크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>준</td>
          <td>
            <button class="delete-crew-button">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
};
