export const template = `
    <div class="base-form-wrapper">
        <div class="base-form__title">{{ title }}</div>
        <form class="base-form">
            <div class="base-form__fields">
                {{#each fields}}
                    <label for="{{ this.id }}"
                           class="base-form__field"
                    >
                        <span class="base-form__label">{{ this.label }}</span>
                        
                        <input id="{{ this.id }}"
                               class="base-form__input"
                               placeholder="{{ this.placeholder }}"
                               name="{{ this.name }}"
                               type="{{ this.type }}"
                        />
                    </label>
                {{/each}}
            </div>

            <div class="base-form__buttons">
                {{#each buttons}}
                    {{#ifeq this.type "submit"}}
                        <button class="msg-button wide is-primary"
                                type="submit"
                        >
                            {{ this.content }}
                        </button>
                    {{/ifeq}}
                    
                    {{#ifnoteq this.type "submit"}}
                        <a href="{{ this.href }}" class="msg-button wide is-primary style-text">
                            {{ this.content }}
                        </a>
                    {{/ifnoteq}}        
                {{/each}}
            </div>
        </form>
    </div>
`;
