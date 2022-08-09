# Git & GitHub
# 1.Git
## Staged file Vs Committed File
- Staged File : 파일의 변화 지속 관찰 할 대상 (변화 이력 저장 x)
- Committed File : 현재 상태 Git Repository 저장 (파일 변화 이력 저장) 
---
## Git.ignore 
- Tracking 하지 않는 특정 파일 목록 관리
- 더 이상 untracked 대상이 되지않음
---
## Git타임캡슐
- 변경사항 확인
```
git status
```
- 파일 담기
```
git add .
```
- 타임캡슐 묻기
```
git commit (-m " ")
```
- 타임캡슐 확인
```
git log
```
---
## Branch
 
 1. 프로젝트 하나 이상 모습으로 관리해야 할 때
 
 2. 여러 작업들 각각 독립되어 진행될 때
 
 - 브랜치 생성
 ```
 git branch " "
 ```
- 브랜치 목록 확인
```
git branch
```
- 특정 브랜치로 이동
```
git switch " "
```
- 브랜치 생성과 동시에 이동하기
```
git switch -c " "
```
- 브랜치 삭제하기
```
git branch -d (" ")
```
---
## 충돌 해결
### -  오류 메시지와 `git status` 확인
### - VS Code에서 해당 부분 확인
### merge
1. 1)충돌 해결 안될 경우 : merge
```
git merge --abort
```
1. 2)해결 가능 시 :
 충돌 부분 수정 뒤 `git add .`,`git commit`로 병합 완료
### rebase
2. 1)충돌 해결 안될 경우 : rebase
```
git rebase --abort
```
2. 2)해결 가능시 :
 충돌 부분 수정한 뒤 `git add .`->
 `git rebase --continue`로 계속 -> 충돌 해결 될 때까지 반복
---
# 
# 2.GitHub 
# > Git으로 관리되는 프로젝트의 **원격 저장소**
## 원격 저장소 사용
- GitHub 레포지토리 생성 후 복붙 명령어
```
git remote add origin (원격 저장소 주소)
```
> 원격 저장소 이름 흔히 `origin`사용 (수정 가능)
---
```
git branch -m main
```
> 기본 브랜치명 `main`으로 권장
---
```
git push -u origin main
```
> 로컬 저장소의 커미 내역들 원격으로 `push`(업로드)
---
- 원격 목록 보기
```
git remote
```
---
## GitHub에서 프로젝트 다운
```
git clone (원격 저장소 주소)
```
---

# CheckList
- 형상관리 시스템은 왜 나오게 되었을까요?
```
```
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
```
```
* git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
```
```
* git과 GitHub은 어떻게 다를까요?
```
```
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
```
```
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
```
```
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

```
- Feat	새로운 기능을 추가할 경우
- Fix	버그를 고친 경우
- Design	CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE	커다란 API 변경의 경우
- !HOTFIX	급하게 치명적인 버그를 고쳐야하는 경우
- Style	코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Refactor	프로덕션 코드 리팩토링
- Comment	필요한 주석 추가 및 변경
- Docs	문서를 수정한 경우
- Test	테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)
- Chore	빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 (프로덕션 코드 변경 X)
- Rename	파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove	파일을 삭제하는 작업만 수행한 경우
