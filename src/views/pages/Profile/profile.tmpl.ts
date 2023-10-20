export const template = `
    <main class="profile center-content">
        <img src={{ imageSrc }} class="profile__avatar" alt="avatar" />
        <div class="profile__name">{{ name }}</div>
        {{#if inEdit}}
            <form>
                <ul class="profile-fields msg-list">
                    {{#each fields}}
                        <li class="profile-field msg-list__item">
                            <label class="profile-field__title">{{ this.title }}</label>
                            <input class="profile-field__content msg-input"
                                   value="{{ this.content }}"
                                   name="{{ this.name }}"
                                   type="{{ this.type }}"
                            >
                        </li>  
                    {{/each}}
                </ul>
            </form>
        {{else}}
            <ul class="profile-fields msg-list">
                {{#each fields}}
                    <li class="profile-field msg-list__item">
                        <div class="profile-field__title">{{ this.title }}</div>
                        <div class="profile-field__content">{{ this.content }}</div>
                    </li>  
                {{/each}}
            </ul>
        {{/if}}
        
        
        <div class="profile-actions msg-list">
            {{#each actions}}
                <li class="profile-action msg-list__item">
                    <button class="profile-action__button msg-button style-text is-primary collapse">{{ this.actionText }}</button>
                </li>  
            {{/each}} 
        </div>
    </main>
`;
