from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask import jsonify
import os
from random import *
import array as arr
import mysql.connector
import itertools
from flask import send_file

app = Flask(__name__)

@app.route("/subject", methods=['POST'])
@cross_origin()
def addSubject():
    print("enter function")
    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="testt"
    )

    mycursor = mydb.cursor()
    sql = "INSERT INTO subject (name, subject1) VALUES (%s, %s)"
    val = (request.json['name'],request.json['subject1'])
    mycursor.execute(sql, val)

    mydb.commit()

    print(mycursor.rowcount, "subject inserted.")
    return jsonify(success=True)

# @app.route("/node", methods=['POST'])
# @cross_origin()
# def addNode():

#     mydb = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     passwd="password",
#     database="mydatabase"
#     )

#     mycursor = mydb.cursor()

#     print(request.json['graph'])

#     mycursor.execute(f"SELECT graphid FROM Graphs WHERE graphname = '{request.json['graph']}'" )
#     print("check point 1")
#     myresult = mycursor.fetchall()

#     # myresult[0]['graphid']
#     # request.json['nodename']
#     # request.json['values']

#     #for x in myresult:
#     #    print(x)

#     print(type(myresult[0]))

#     graphid = myresult[0][0]

#     sql = "INSERT INTO Nodes (graphid, nodename, value) VALUES (%s, %s, %s)"
#     val = (graphid, request.json['node'], request.json['values'])
#     mycursor.execute(sql, val)

#     mydb.commit()

#     print(mycursor.rowcount, "node inserted.")
#     return jsonify(success=True)

# @app.route("/edge", methods=['POST'])
# @cross_origin()
# def addEdge():
#     mydb = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     passwd="password",
#     database="mydatabase"
#     )

#     mycursor = mydb.cursor()

#     mycursor.execute(f"SELECT * FROM mydatabase.Graphs WHERE graphname = '{request.json['graph']}'")
#     print("check point 2")
#     myresult = mycursor.fetchall()

#     # myresult[0]['graphid']
#     # request.json['nodename']
#     # request.json['values']

#     #for x in myresult:
#     #    print(x)

#     print(type(myresult[0]))

#     graphid = myresult[0][0]

#     # add a new edge
#     sql = "INSERT INTO Edges (graphid) VALUES (%s)"
#     val = (graphid,)
#     mycursor.execute(sql, val)

#     mydb.commit()


#     # get edgeid for last row in the table

#     mycursor.execute("SELECT edgeid FROM Edges ORDER BY edgeid DESC LIMIT 1")
#     myresult = mycursor.fetchall()
#     edgeid = myresult[0][0]

#     # add edge line for a parent
    
#     mycursor.execute(f"SELECT nodeid FROM Nodes WHERE nodename = '{request.json['parent']}'")
#     myresult = mycursor.fetchall()
#     parentid = myresult[0][0]

#     sql = "INSERT INTO EdgeLines (edgeid, nodeid, position) VALUES (%s, %s, %s)"
#     val = (edgeid, parentid, "parent")
#     mycursor.execute(sql, val)
#     mydb.commit()

#     # add edge line for a child

#     mycursor.execute(f"SELECT nodeid FROM Nodes WHERE nodename = '{request.json['child']}'")
#     myresult = mycursor.fetchall()
#     childid = myresult[0][0]

#     sql = "INSERT INTO EdgeLines (edgeid, nodeid, position) VALUES (%s, %s, %s)"
#     val = (edgeid, childid, "child")
#     mycursor.execute(sql, val)
#     mydb.commit()

#     return jsonify(success=True)

# # @app.route("/getInfo", methods=['GET'])
# # @cross_origin()
# # def getInfo():
# #     mydb = mysql.connector.connect(
# #     host="localhost",
# #     user="root",
# #     passwd="password",
# #     database="mydatabase"
# #     )

# #     mycursor = mydb.cursor()

# #     mycursor.execute("SELECT * FROM Graphs")

# #     myresult = mycursor.fetchall()

# #     # myresult[0]['graphid']

# #     for x in myresult:
# #         i = 0
# #         graph[i] = {
# #             'id': x[0],
# #             'name': x[1]
# #         }
# #     return jsonify(graph=graph)

# @app.route("/export", methods=['GET'])
# @cross_origin()
# def export():
#     filename=request.args.get('filename') + ".bif"
#     # Graph Class
#     class Graph:
#         def __init__(self, id, name):
#             self.graphId = id
#             self.graphName = name
#             self.nodes = []
#             self.edges = []

#         def myname(self):
#             print("Graph's name is " + self.graphName)

#         def parentCheck(self,id):
#             for x in self.nodes:
#                 if(x.nodeId==id):
#                     return x.nodeName

        


#     # Node Class
#     class Node:
#         def __init__(self, nodeid, name, value, graphId):
#             self.nodeId = nodeid
#             self.nodeName = name
#             self.value = value
#             self.graphId = graphId
#             self.cpt = []

#         def myname(self):
#             print("Node's name is " + self.nodeName)

#         def addCpt(self, table):
#             self.cpt.append(table)


#     # Tables Class
#     class Tables:
#         def __init__(self, truthValue, probability):
#             self.truthValue = truthValue
#             self.probability = probability


#     # Edge Class
#     class Edge:
#         def __init__(self, edgeId, nodeParent, nodeChild, graphId):
#             self.edgeId = edgeId
#             self.nodeParent = nodeParent
#             self.nodeChild = nodeChild
#             self.graphId = graphId


#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     # Create the network topology
#     mycursor = mydb.cursor()

#     mycursor.execute("SELECT * FROM Graphs")

#     myresult = mycursor.fetchall()

#     for x in myresult:
#         mygraph = Graph(x[0], x[1])

#     # Create Node
#     mycursor = mydb.cursor()

#     mycursor.execute("SELECT * FROM Nodes")

#     myresult = mycursor.fetchall()

#     for x in myresult:
#         text = x[3]
#         text = text.split(',')
#         text = [i.strip(' ') for i in text]
#         mygraph.nodes.append(Node(x[0], x[2], text, x[1]))

#     # Create Edge
#     mycursor = mydb.cursor()

#     sql = "SELECT * FROM Edges WHERE graphid = %s"
#     adr = (mygraph.graphId,)

#     mycursor.execute(sql, adr)

#     myresult = mycursor.fetchall()

#     numofEdge = mycursor.rowcount

#     # for x in range(numofEdge):
#     #     sql = "SELECT * FROM EdgeLines WHERE edgeid = %s"
#     #     adr = (x + 1,)
#     #     mycursor.execute(sql, adr)
#     #     myresult = mycursor.fetchall()


        
#     #     for y in myresult:
#     #         if y[2] == 'parent':
#     #             nodeParent = y[1]
#     #         else:
#     #             nodeChild = y[1]

#     #     mygraph.edges.append(Edge(x + 1, nodeParent, nodeChild, mygraph.graphId))

#     for x in myresult:
#         sql = "SELECT * FROM EdgeLines WHERE edgeid = %s"
#         adr = (x[0],)
#         mycursor.execute(sql, adr)
#         result = mycursor.fetchall()

#         for y in result:
#             if y[2] == 'parent':
#                 nodeParent = y[1]
#             else:
#                 nodeChild = y[1]

#         mygraph.edges.append(Edge(x[0], nodeParent, nodeChild, mygraph.graphId))


#     print("start create tables")
#     # Create Tables
#     mycursor = mydb.cursor()

#     sql = "SELECT * FROM Nodes WHERE graphid = %s"
#     adr = (mygraph.graphId,)

#     mycursor.execute(sql, adr)

#     myresult = mycursor.fetchall()

#     numofNode = mycursor.rowcount

#     for x in mygraph.nodes:
#         sql = "SELECT * FROM Tables WHERE nodeid = %s"
#         adr = (x.nodeId,)
#         mycursor.execute(sql, adr)
#         myresult = mycursor.fetchall()
#         for y in myresult:
#             x.addCpt(Tables(y[1], y[3]))
#             # print("node = ",x.nodeName)
#             # print("after add = ",x.cpt)

#     # for x in range(numofNode):
#     #     Node = mygraph.nodes[x]
#     #     sql = "SELECT * FROM Tables WHERE nodeid = %s"
#     #     adr = (x + 1,)
#     #     mycursor.execute(sql, adr)
#     #     myresult = mycursor.fetchall()

#     #     for y in myresult:
#     #         Node.addCpt(Tables(y[1], y[3]))
#     #         print("node = ",Node.nodeName)
#     #         print("after add = ",Node.cpt)
            

    
    
#     # Create the variables
#     bn = gum.BayesNet(mygraph.graphName)
#     # print(bn)
#     stateFrom = ' ?'
#     for x in range(numofNode):
#         Node = mygraph.nodes[x]
#         bn.add(gum.LabelizedVariable(Node.nodeName, Node.nodeName + stateFrom, Node.value))
#     # print(bn)

#     # i=0
#     # print("Node CPT = ",Node.cpt)
#     # for Node in mygraph.nodes:
#     #     print("test 1 =",i)
#     #     print("nodename = ",Node.nodeName)
#     #     print("node.cpt=",Node.cpt)

#     #     allProbability = []
#     #     for Tables in Node.cpt:
#     #         print("tables =",Tables.truthValue)
#     #         allProbability.append(Tables.probability)
#     #     print("test 2 =",i)
#     #     print("allProb = ",allProbability)
#     #     print("Node name =",Node.nodeName)
#     #     # bn.cpt(Node.nodeName).fillWith(allProbability)
#     #     print("test 3 i =",i)
#     #     i = i+1

#     # Create the arcs
#     for Edge in mygraph.edges:
#         # print("type of Edge=",Edge)

#         # Node = mygraph.nodes[Edge.nodeParent - 1]
#         nodeParent = mygraph.parentCheck(Edge.nodeParent)
#         # Node = mygraph.nodes[Edge.nodeChild - 1]
#         nodeChild = mygraph.parentCheck(Edge.nodeChild)
#         bn.addArc(nodeParent, nodeChild)
#     print(bn)

#     # Create the probability tables
#     i=0
#     for Node in mygraph.nodes:
#         print("test 1 =",i)
#         allProbability = []
#         for Tables in Node.cpt:
#             print("tables =",Tables)
#             allProbability.append(Tables.probability)
#         print("test 2 =",i)
#         print("allProb2 = ",allProbability)
#         print("Node name =",Node.nodeName)
#         bn.cpt(Node.nodeName).fillWith(allProbability)
#         print("test 3 i =",i)
#         i = i+1

#     # Save File
#     gum.saveBN(bn,os.path.join("out",filename))
#     return send_file(filename_or_fp='/Users/poo1882/Desktop/CDoctor/out/'+filename, attachment_filename=filename,as_attachment=True)

# @app.route("/getNodesList", methods=['GET'])
# @cross_origin()
# def getNodesList():

#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     mycursor = mydb.cursor()
#     sql = "SELECT * FROM Nodes"
#     mycursor.execute(sql)
#     myresult = mycursor.fetchall()

#     allnodes = []

#     for x in myresult:
#         node = {
#             'nodeid' : x[0],
#             'nodename' : x[2]
#         }
#         allnodes.append(node)
        
#     return jsonify(allnodes=allnodes)

# @app.route("/getCPT", methods=['GET'])
# @cross_origin()
# def getCPT():

    
#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     nodename = request.args.to_dict()['nodename']
#     mycursor = mydb.cursor()
#     mycursor.execute(f"SELECT nodeid FROM Nodes WHERE nodename = '{nodename}'")
#     myresult = mycursor.fetchall()
#     print("myresult =",myresult)
#     nodeid = myresult[0][0]

    
#     sql = "SELECT tableid, truthvalue, probability FROM Tables WHERE nodeid = %s"
#     val = (nodeid,)
#     mycursor.execute(sql, val)
#     myresult = mycursor.fetchall()

#     cpt = []

#     for x in myresult:
#         truth = {
#             'tableid' : x[0],
#             'truth' : x[1],
#             'probability' : x[2]
#         }
#         cpt.append(truth)
        
#     return jsonify(cpt=cpt)

# @app.route("/getInfo", methods=['GET'])
# @cross_origin()
# def getInfo():
#     args = request.args.to_dict()
#     nodeid = args['nodeid']
#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     mycursor = mydb.cursor()
#     print("nodeid=",nodeid)
#     sql = "SELECT * FROM Nodes WHERE nodeid = %s"
#     adr = (nodeid,)
#     mycursor.execute(sql, adr)
#     myresult = mycursor.fetchall()

#     allvalue = {}
#     print("myresult=",myresult)

#     for y in myresult:
#         print("enter")
#         print(y)
#         allvalue = {
#             'value' : y[3].count(",")+1,
#         }

#     print(allvalue)
        
#     sql = "SELECT * FROM Tables WHERE nodeid = %s"
#     adr = (nodeid,)
#     mycursor.execute(sql, adr)
#     myresult = mycursor.fetchall()

#     mycpt = []

#     for x in myresult:
#         truth = {
#             'tableid' : x[0],
#             'truthvalue' : x[1],
#             'probability' : x[3]
#         }
#         mycpt.append(truth)
        
#     return jsonify(mycpt=mycpt,allvalue=allvalue)

# @app.route("/genCPT", methods=['POST'])
# @cross_origin()
# def genCPT():
    
#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     # clear rows in Tables
#     mycursor = mydb.cursor()
#     mycursor.execute("DELETE FROM Tables")
#     mydb.commit()

#     # generate list of possible value

#     mycursor.execute("SELECT * FROM Nodes")
#     myresult = mycursor.fetchall()
    
#     i=1
#     print("point 1")
#     # loop through nodes
#     for x in myresult:
#         print("node number "+str(i))
#         nodeid = x[0]
#         nodevalue = x[3].replace(" ","")
#         nodevalue = nodevalue.split(',')
#         nodevalue = [a.strip(' ') for a in nodevalue]
#         mycursor.execute(f"SELECT * FROM EdgeLines WHERE nodeid = {nodeid} AND position = 'child'")
#         edges = mycursor.fetchall()
#         parents = []
#         nodeValues = []

#         #print(str(i)+" point 2")
#         # find node's parents
#         for y in edges:
#             mycursor.execute(f"SELECT nodeid FROM EdgeLines WHERE edgeid = {y[0]} AND position = 'parent'")
#             result = mycursor.fetchall()
#             parents.append(result[0])


#         # print(str(i)+" point 3")
#         # print("testja")
#         # get truth value from parents
#         # print("parent0 is ")
#         # print(type(parents))
#         # print("type of y is ")
        
#         for y in parents:
#             mycursor.execute(f"SELECT value FROM Nodes WHERE nodeid = {y[0]}")
#             result = mycursor.fetchall()
#             print("result = ",result[0][0])
#             text = result[0][0]
#             text = text.replace(" ","")
#             text = text.split(',')
#             text = [a.strip(' ') for a in text]
#             nodeValues.append(text)
    
#         # concatenate truth value from parents + child
#         nodeValues.append(nodevalue)
        
#         print("nodeValues1 = ",nodeValues)

    
#         valueProduct = list(itertools.product(*nodeValues))
#         # print("valueProduct = ")
#         # print(valueProduct)
#         # print(str(i)+" point 5")
#         # convert truth value into String
#         print("valueProduct =",valueProduct)
#         tables = []
#         for y in valueProduct:
#             myString = ",".join(y)
#             tables.append(myString)

        
#         # insert into Tables
#         for y in tables:
#             sql = "INSERT INTO Tables (truthvalue, nodeid) VALUES (%s, %s)"
#             val = (y, str(nodeid))
#             mycursor.execute(sql, val)
#             mydb.commit()
#         #print(str(i)+" point 7")
#         i = i+1
#     return jsonify(success=True)

# @app.route("/saveCPT", methods=['POST'])
# @cross_origin()
# def saveCPT():
#     updatedCPT = request.json['mycpt']
#     mydb = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         passwd="password",
#         database="mydatabase"
#     )

#     mycursor = mydb.cursor()
#     for x in updatedCPT:
#         mycursor.execute(f"UPDATE Tables SET probability = {x['probability']} WHERE tableid = {x['tableid']}")
#         mydb.commit()
        
#     return jsonify(success=True)



if __name__ == "__main__":
    app.run(debug=True)