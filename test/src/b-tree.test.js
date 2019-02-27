describe('Testing binary sorted tree "BSTree()"', function () {
    let bstree = new BSTree();

    describe('testing "insert" method', function () {
		it('should return 0 for empty parameter', function () {
			const expected = 0;
			const actual = bstree.insert();
			
			assert.equal(expected, actual);
		});

        let testData = [50, 39, 57, 78, 86, 15, 76, 98, 4, 25];

        testData.forEach(function (data, ind) {
            it(`should return ${ind + 1} for inserting ${data}`, function () {
                let expected = ind + 1;
                let actual = bstree.insert(data);

                assert.equal(expected, actual);
            });
        });
    });

    describe('testing "toArray" method', function () {
		it(`should return empty array`, function () {
            let expected = [];
			let tempTree = new BSTree();
            let actual = tempTree.toArray();

            assert.deepEqual(expected, actual);
        });
		
		it(`should return array with singl element`, function () {
            let expected = [10];
			let tempTree = new BSTree();
			tempTree.insert(10);
            let actual = tempTree.toArray();

            assert.deepEqual(expected, actual);
        });

        it(`should return sorted array`, function () {
            let expected = [4, 15, 25, 39, 50, 57, 76, 78, 86, 98];
            let actual = bstree.toArray();

            assert.deepEqual(expected, actual);
        });
    });

    describe('testing "toLinkedList" method', function () {
		it(`should return empty LinkedList`, function () {
			const tempTree = new BSTree();
            const tempLinkedList = tempTree.toLinkedList();
            const expected = tempTree.toArray();
			const actual = tempLinkedList.toArrayList().arr;

            assert.deepEqual(expected, actual);
        });
		
		it(`should return LinkedList with singl element`, function () {
			const tempTree = new BSTree();
			tempTree.insert(10);
            const tempLinkedList = tempTree.toLinkedList();
            const expected = tempTree.toArray();
			const actual = tempLinkedList.toArrayList().arr;

            assert.deepEqual(expected, actual);
        });

        it(`should return sorted LinkedList [4, 15, 25, 39, 50, 57, 76, 78, 86, 98]`, function () {
			const tempLinkedList = bstree.toLinkedList();
            const expected = bstree.toArray();
			const actual = tempLinkedList.toArrayList().arr;

            assert.deepEqual(expected, actual);
         });
    });

    describe('testing "toString" method', function () {
		it(`should return empty string {}`, function () {
            let expected = '{}';
			let tempTree = new BSTree();
            let actual = tempTree.toString();

            assert.equal(expected, actual);
        });
		
		it(`should return string {10}`, function () {
            let expected = '{10}';
			let tempTree = new BSTree();
			tempTree.insert(10);
            let actual = tempTree.toString();

            assert.equal(expected, actual);
        });

        it(`should return sorted array string`, function () {
            let expected = '{4, 15, 25, 39, 50, 57, 76, 78, 86, 98}';
            let actual = bstree.toString();

            assert.equal(expected, actual);
        });
    });
	
    describe('testing "find" method', function () {
		it(`should return null for any parameter for empty tree`, function () {
            const expected = null;
			const tempTree = new BSTree();
            const actual = tempTree.find(100500);

            assert.equal(expected, actual);
        });
		
		it(`should find entry with value = 10`, function () {
            const expected = 10;
			const tempTree = new BSTree();
			tempTree.insert(10);
            const actual = tempTree.find(10);

            assert.equal(expected, actual.value);
        });
		
        const testData = [50, 39, 57, 78, 86, 15, 76, 98, 4, 25];
        testData.forEach(function (data) {
            it(`should find entry with value ${data} for common tree`, function () {
                const expected = data;
                const actual = bstree.find(data);

                assert.equal(expected, actual.value);
            });
        });

		it(`should return null for unexist value`, function () {
            const expected = null;
            const actual = bstree.find(100500);

            assert.equal(expected, actual);
        });
		
		it(`should return null for unexist value`, function () {
            const expected = null;
            const actual = bstree.find(-100500);

            assert.equal(expected, actual);
        });
		
		it(`should return null for empty parameter`, function () {
            const expected = null;
            const actual = bstree.find();

            assert.equal(expected, actual);
        });
	});	
	
	describe('testing "remove" method', function () {
		it(`should return null for empty parameter`, function () {
			const expected = null;
			const actual = bstree.remove();

            assert.equal(expected, actual);
		});
		
		it(`should return null for not exists value in tree`, function () {
			const expected = null;
			const actual = bstree.remove(100500);

            assert.equal(expected, actual);
		});
		
	});
	
	describe('testing "empty" method', function () {
		it(`should return 0 for empty() tree`, function () {
            const expected = 0;
			const tempTree = new BSTree();
            const actual = tempTree.empty();

            assert.equal(expected, actual);
        });
		
		it(`should return 0 for empty() tree with 1 element`, function () {
            const expected = 0;
			const tempTree = new BSTree();
			tempTree.insert(10);
            const actual = tempTree.empty();

            assert.equal(expected, actual);
        });
		
		it(`should return 0 for empty() tree with many element`, function () {
            const expected = 0;
            const actual = bstree.empty();

            assert.equal(expected, actual);
        });
	});
});
