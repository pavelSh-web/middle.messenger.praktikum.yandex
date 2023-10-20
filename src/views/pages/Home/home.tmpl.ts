export const template = `
    <div class="center-content">
        <ui class="home-links">
            {{#each links}}
                <li class="home-links__item">
                    <a class="msg-button is-light-dark" href="{{ this.href }}">{{ this.text }}</a>
                </li>
            {{/each}}
        </ui>
    </div>
`;
