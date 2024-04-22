# NxMarketData

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve nx-market-data` to start the development server. Happy coding!

## Build for production

Run `npx nx build nx-market-data` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

## i18n
Multiple files
find /Users/home/learn/github/nx-market-data/apps/nx-market-data/src -type f \( -name '*.ts' -or -name '*.tsx' \)  -print > list
xgettext --files-from=list -c -d translations -p locale --language=JavaScript --from-code=utf-8 --keyword=_ --keyword=_:1 --keyword=_n:1,2 --keyword=_c:1c,2 --keyword=_cn:1c,2,3
mv locale/translations.po locale/translations.pot
msginit -i locale/translations.pot --locale=en_EN -o locale/en.po
msginit -i locale/translations.pot --locale=fr_FR -o locale/fr.po
msginit -i locale/translations.pot --locale=es_ES -o locale/es.po
msgmerge locale/en.po locale/translations.pot -o locale/en.po
msgmerge locale/fr.po locale/translations.pot -o locale/fr.po
msgmerge locale/es.po locale/translations.pot -o locale/es.po
npm run po2jsonEN
npm run po2jsonES
npm run po2jsonFR
rm /Users/home/learn/github/nx-market-data/list
