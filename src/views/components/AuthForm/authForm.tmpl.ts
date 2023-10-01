export const template = `
    <div class="auth-form-wrapper">
        <div class="auth-form__title">{{ title }}</div>
        <form class="auth-form">
            <div class="auth-form__fields">
                {{#each fields}}
                    <label for="{{ this.id }}"
                           class="auth-form__field"
                    >
                        <span class="auth-form__label">{{ this.label }}</span>
                        
                        <input id="{{ this.id }}"
                               class="auth-form__input"
                               placeholder="{{ this.placeholder }}"
                               name="{{ this.name }}"
                               type="{{ this.type }}"
                        />
                    </label>
                {{/each}}
            </div>

            <div class="auth-form__buttons">
                {{#each buttons}}
                    {{#ifeq this.type "submit"}}
                        <button class="msg-button wide is-primary"
                                type="submit"
                        >
                            {{ this.content }}
                        </button>
                    {{/ifeq}}
                    
                    {{#ifnoteq this.type "submit"}}
                        <button class="msg-button wide is-primary style-text">
                            {{ this.content }}
                        </button>
                    {{/ifnoteq}}        
                {{/each}}
            </div>
        </form>
    </div>
`;
