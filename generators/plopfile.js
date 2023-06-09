module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        templateFile: 'templates/addIndexComponent.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('page', {
      description: 'application page logic',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name please'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/index.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{pascalCase name}}/index.ts',
          templateFile: 'templates/pageIndex.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
          templateFile: 'templates/test.tsx.hbs'
        },
        {
          type: 'append',
          path: '../src/components/index.ts',
          templateFile: 'templates/addIndexComponent.ts.hbs'
        }
      ]
    })
}
